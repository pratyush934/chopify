//will be checking whether user is there or not

import { currentUser } from "@clerk/nextjs/server";
import prisma from "./db";

function getRandomWord(length: number) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let word = "";
  for (let i = 0; i < length; i++) {
    word += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return word;
}

export const checkUser = async () => {
  const user = await currentUser();

  //   console.log("Here is the user Look at the guy ", user);

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) return loggedInUser;

    const firstName = user.firstName;
    const lastName = user.lastName;
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const word1 = getRandomWord(4 + Math.floor(Math.random() * 3));

    const newName =
      `${firstName}-${lastName}`.trim() || `User${randomNumber}${word1}`;

    const email = user.emailAddresses[0].emailAddress;

    if (email.length == 0) {
      console.log(
        "The eamil is not there so consider it carefully, I am stopping function , Poggy from CheckUser"
      );
      return null;
    }

    const phoneNumber =
      user.phoneNumbers && user.phoneNumbers.length > 0
        ? user.phoneNumbers[0].phoneNumber
        : null;

    const newUser = await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name: newName,
        email: email,
        imageUrl: user.imageUrl,
        phoneNumber: phoneNumber,
        birthDay: new Date(),
      },
    });

    return newUser;
  } catch (error) {
    console.log("There is an error that exist in checkUsers.ts", error);
    throw error;
  }
};
