import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

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
            <div className="flex items-center justify-between">
              <Label htmlFor="password-complexity">Complexity</Label>
              <Select id="password-complexity" className="w-40">
                <option value="low">Low</option>
                <option value="medium" selected>
                  Medium
                </option>
                <option value="high">High</option>
              </Select>
            </div>
            <Button className="w-full">Generate Password</Button>
          </CardContent>
        </Card>
  )
}

export default GeneratorCard