import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { messageBody } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await prisma.conversation.findFirst({
      where: {
        participantIds: {
          hasEvery: [senderId, receiverId],
        },
      },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          participantIds: {
            set: [senderId, receiverId],
          },
        },
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        body: messageBody,
        senderId,
        conversationId: conversation.id,
      },
    });

    if (newMessage) {
      conversation = await prisma.conversation.update({
        where: { id: conversation.id },
        data: {
          messages: {
            connect: {
              id: newMessage.id,
            },
          },
        },
      });
    }
    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller .............");
    console.log(error);
    res.status(400).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { id: toUserId } = req.params;
    const myId = req.user.id;

    const conversation = await prisma.conversation.findFirst({
      where: {
        participantIds: {
          hasEvery: [toUserId, myId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessage controller ...........");
    console.log(error);
    res.status(400).json({ error: "Internal server error" });
  }
};

export const getSideBarUsers = async (req: Request, res: Response) => {
  try {
    const myId = req.user.id;

    const conversations = await prisma.user.findMany({
      where: {
        id: {
          not: myId,
        },
      },
      select: {
        id: true,
        username: true,
        fullName: true,
        profilePic: true,
      },
    });

    if (conversations) {
      res.status(200).json(conversations);
    }
  } catch (error) {
    console.log("Error in getMessage controller ...........");
    console.log(error);
    res.status(400).json({ error: "Internal server error" });
  }
};
