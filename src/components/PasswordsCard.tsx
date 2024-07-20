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
// import { GlobeIcon, EyeIcon, FilePenIcon } from "@heroicons/react/20"
import { Button } from "./ui/button";

const PasswordsCard = () => {
  return (
    <Card className="col-span-1 bg-card dark:bg-background">
      <CardHeader>
        <CardTitle>Password List</CardTitle>
        <CardDescription>View and manage your saved passwords.</CardDescription>
      </CardHeader>
      <CardContent>
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
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  {/* <GlobeIcon className="w-4 h-4" /> */}
                  <span>example.com</span>
                </div>
              </TableCell>
              <TableCell>johndoe</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>********</span>
                  <Button variant="ghost" size="icon">
                    {/* <EyeIcon className="w-4 h-4" /> */}
                    <span className="sr-only">Show password</span>
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  {/* <FilePenIcon className="w-4 h-4" /> */}
                  <span className="sr-only">Edit password</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  {/* <GlobeIcon className="w-4 h-4" /> */}
                  <span>twitter.com</span>
                </div>
              </TableCell>
              <TableCell>janedoe</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>********</span>
                  <Button variant="ghost" size="icon">
                    {/* <EyeIcon className="w-4 h-4" /> */}
                    <span className="sr-only">Show password</span>
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  {/* <FilePenIcon className="w-4 h-4" /> */}
                  <span className="sr-only">Edit password</span>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PasswordsCard;
