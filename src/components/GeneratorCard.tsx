"use client";

import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { generatePassword } from "@/lib/generatorLogic";
import { CopyIcon } from "./ui/icons/CopyIcon";

// Create a function that generates a password based on params
// Handle user input
// Display the generated password

const GeneratorCard = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [complexity, setComplexity] = useState("medium");
  const [showPassword, setShowPassword] = useState(false);
  const [textToCopy, setTextToCopy] = useState(password);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length, complexity);
    setPassword(newPassword);
  };

  return (
    <Card className="col-span-1 h-full bg-card dark:bg-background">
      <CardHeader>
        <CardTitle>Password Generator</CardTitle>
        <CardDescription>Create secure and unique passwords.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="password-length">Password Length</Label>
          <Input
            id="password-length"
            type="number"
            min="8"
            max="32"
            defaultValue="16"
            className="w-20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-6 items-center justify-between">
          <Label htmlFor="password-complexity">Complexity</Label>
          <Select
            id="complexity"
            value={complexity}
            onValueChange={(value) => setComplexity(value)}
          >
            <SelectTrigger className="h-auto">
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={() => {
            handleGeneratePassword();
            setShowPassword((prev) => !prev);
          }}
          className="w-full"
        >
          Generate Password
        </Button>
        <div className="flex items-center gap-6 justify-between">
          <Label>Password</Label>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            readOnly
            className="border p-2 rounded w-full"
          />
          <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => {navigator.clipboard.writeText(password)}}>
            <CopyIcon />
            <span className="sr-only">Copy password</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneratorCard;
