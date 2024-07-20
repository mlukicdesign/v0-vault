import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

// Create a function that generates a password based on params
// Handle user input
// Display the generated password




const GeneratorCard = () => {
  return (
    <Card className="col-span-1 bg-card dark:bg-background">
          <CardHeader>
            <CardTitle>Password Generator</CardTitle>
            <CardDescription>Create secure and unique passwords.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="password-length">Password Length</Label>
              <Input id="password-length" type="number" min="8" max="32" defaultValue="16" className="w-20" />
            </div>
            <div className="flex gap-6 items-center justify-between">
              <Label htmlFor="password-complexity">Complexity</Label>
              <Select id="complexity" defaultValue="medium">
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
            <Button className="w-full">Generate Password</Button>
          </CardContent>
        </Card>
  )
}

export default GeneratorCard