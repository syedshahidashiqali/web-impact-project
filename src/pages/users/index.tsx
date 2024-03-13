"use client";

import useLoader from "@/hooks/loader";
import { getUsers } from "@/services/users";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { EyeIcon } from "../../components/EyeIcon";
import Link from "next/link";
import Image from "next/image";

export interface columnI {
  key: string;
  label: string;
}
const columns: columnI[] = [
  { key: "id", label: "ID" },
  { key: "image", label: "Image" },
  { key: "fname", label: "First Name" },
  { key: "lname", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "action", label: "Action" },
];

export default function Users() {
  const { isLoading: areUsersLoading, data: users } = useLoader(
    async () => await getUsers(),
    [],
    []
  );

  return (
    <div className="mx-3 my-3">
      <h1>All Users</h1>
      <Table isStriped>
        <TableHeader columns={columns}>
          {(column: columnI) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {!areUsersLoading &&
            users?.users?.map((user: any, ind: number) => (
              <TableRow key={ind + 1}>
                <TableCell>{user?.id}</TableCell>
                <TableCell>
                  <Image
                    src={user?.image}
                    alt={user?.firstName}
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell>{user?.firstName}</TableCell>
                <TableCell>{user?.lastName}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>
                  <Link href={`/users/${user?.id}`}>
                    <EyeIcon />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
