"use client"

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { PlusIcon } from "./ui/icons/PlusIcon";

// Type definition for the password entry object.
type PasswordEntry = {
  website: string;
  username: string;
  password: string;
};

const PasswordsCard = () => {
  // initialize variables with an empty array used to store the entries. 
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);
  // Handle form visibility, setting initial state to false. 
  const [showForm, setShowForm] = useState(false);
  // Handle form input, setting initial state to an empty object
  const [newEntry, setNewEntry] = useState<PasswordEntry>({
    website: "",
    username: "",
    password: "",
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleAddPassword = () => {
    setPasswords((prevPasswords) => [...prevPasswords, newEntry]);
    setNewEntry({ website: "", username: "", password: "" });
    setShowForm(false);
  };

  return (
    <Card className="col-span-1 bg-card dark:bg-background">
      <CardHeader>
        <CardTitle>Password List</CardTitle>
        <CardDescription>View and manage your saved passwords.</CardDescription>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setShowForm((prev) => !prev)}
          className="flex justify-between"
        >
          Add Password
          <PlusIcon />
        </Button>
      </CardHeader>
      <CardContent>
        {showForm && (
          <form
            className="mb-4 p-4 border border-gray-300 rounded-md"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddPassword();
            }}
          >
            <div className="mb-2">
              <input
                type="text"
                name="website"
                placeholder="Website"
                value={newEntry.website}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={newEntry.username}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newEntry.password}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Save
            </Button>
          </form>
        )}

        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Website</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Password</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {passwords.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{entry.website}</span>
                  </div>
                </TableCell>
                <TableCell>{entry.username}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>********</span>
                    <Button variant="ghost" size="icon">
                      <span className="sr-only">Show password</span>
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <span className="sr-only">Edit password</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PasswordsCard;
