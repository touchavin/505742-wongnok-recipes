// localhost:3000//api/menus
// GET,POST,PUT,DELETE

import { Menu } from "@/app/interface/menu";
import { connectDB } from "@/app/connection/db";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  let menus: Menu[];

  try {
    const db = await connectDB();
    if (id) {
      menus = await db.all(`SELECT * FROM menus WHERE id = ${id}`);
    } else {
      menus = await db.all("SELECT * FROM menus");
    }
    return Response.json(menus)
  } catch (error) {
    console.error("Error fetching menus:", error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}


export async function POST(req: Request, res: Response) {
  const body = await req.json() as Menu;
  
  try {
    // Destructure the body object to extract properties
    const { name, description, img, ingredients, period, level } = body;

    // Perform data validation if needed
    if (!name || !description || !img || !ingredients || !period || !level) {
      throw new Error("Invalid data: name, description, and img are required.");
    }

    const db = await connectDB();3
    const { lastID } = await db.run('INSERT INTO menus (name, description, img, ingredients, period, level) VALUES (?, ?, ?, ?, ?, ?)', [name, description, img, ingredients, period, level]);
    const newMenu: Menu = { id: lastID, name, description, img, ingredients, period, level};
    return Response.json(newMenu);

  } catch (error) {
    console.error("Error fetching menus:", error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}

export async function PUT(req: Request, res: Response) {
  const body = await req.json() as Menu;
  
  try {
    // Destructure the body object to extract properties
    const {id, name, description, img, ingredients, period, level } = body;

    // Perform data validation if needed
    if (!id || !name || !description || !img || !ingredients || !period || !level ) {
      throw new Error("Invalid data: id, name, difficulty, period, description, step, and img are required.");
    }



    const db = await connectDB();
    await db.run('UPDATE menus SET name = ?, description = ?, img = ?, ingredients = ?, period = ?, level = ? WHERE id = ? ', [ name, description, img, ingredients, period, level, id ]);

    const newMenu: Menu = { id, name, description, img, ingredients, period, level};
    return Response.json(newMenu);

  } catch (error) {
    console.error("Error fetching menus:", error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}

export async function DELETE(req: Request, res: Response) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  
  try {
    const db = await connectDB();
    
    if (id == null) {
      throw new Error("Invalid data: name, description, and img are required.");
    }

    const menus: Menu[] = await db.all(`SELECT * FROM menus WHERE id = ${id}`);
    if (menus.length != 1) {
      throw new Error(`Item id: ${id} not found`);
    }

    const result = await db.all(`DELETE FROM menus WHERE id = ${id}`);
    // console.log(result)
    return Response.json(menus)
  } catch (error) {
    console.error("Error fetching menus:", error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}