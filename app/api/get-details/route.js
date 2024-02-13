
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import prisma from "@/lib/prisma";

export const POST = async (req) => {
  const data = await req.formData();

  const name = data.get("name");
  const address = data.get("address");
  const city = data.get("city");
  const state = data.get("state");
  const contact = data.get("contact");
  const email = data.get("email");
  const imagefile = data.get("image");
  console.log("image--",imagefile);

  // console.log(school_name , address,city,state, contact, email, imagefile);
  if (
    !name ||
    !address ||
    !city ||
    !state ||
    !contact ||
    !email ||
    !imagefile
  ) {
    return NextResponse.json(
      { message: "No Data found", success: false },
      { status: 500 }
    );
  }
  // console.log("file-->",file);
  const byteData = await imagefile.arrayBuffer();
  // console.log("byteData-->",byteData);

  const buffer = Buffer.from(byteData);
  // console.log("buffer-->",buffer);

  // declare path where we upload our file

  const path = `./public/images/${imagefile.name}`;
  const imagepath = `/images/${imagefile.name}`; //we store this path because we access public directory file in next js like-- "/images/file_name"

  await writeFile(path, buffer);

  // ------------inset our data into database--------
  const record = await prisma.post.create({
    data: {
       name ,
    address ,
    city,
    state,
    email,
    contact,
    image:imagepath
    },
  });

  console.log("rsocrd--",record);

  if (record) {
   
    return NextResponse.json(
      { message: "success", record },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
};
