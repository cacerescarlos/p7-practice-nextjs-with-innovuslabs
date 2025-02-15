"use client";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { User } from "@/utils/types";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => setHighlighted(id);
  const handleMouseLeave = () => setHighlighted(null);

  return (
    <List>
      {users.map((user) => (
        <ListItem
          key={user.id}
          sx={{
            backgroundColor: highlighted === user.id ? "lightblue" : "white",
            transition: "background-color 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleMouseEnter(user.id)}
          onMouseLeave={handleMouseLeave}
        >
          <ListItemText
            primary={user.name}
            secondary={
              <Typography variant="body2" color="textSecondary">
                {user.email}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
