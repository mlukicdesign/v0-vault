"use client"

import React, { useState, useEffect } from "react";
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
import { Input } from "./ui/input";
import { createCredentials } from "@/db/uploadData";

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

  const handleAddPassword = async () => {
    try {
      const response = await fetch('/api/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });
      const result = await response.json();
      if (result.success) {
        setPasswords((prevPasswords) => [...prevPasswords, newEntry]);
        setNewEntry({ website: "", username: "", password: "" });
        setShowForm(false);
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await fetch('/api/getCredentials');
        if (response.ok) {
          const data = await response.json();
          setPasswords(data);
        } else {
          console.error('Failed to fetch passwords');
        }
      } catch (error) {
        console.error('Error fetching passwords:', error);
      }
    };

    fetchPasswords();
  }, []);

  return (
    <Card className="col-span-2 bg-card dark:bg-background">
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
              <Input
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
              <Input
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
              <Input
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
            {passwords.map((entry) => (
              <TableRow key={entry.id}>
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
