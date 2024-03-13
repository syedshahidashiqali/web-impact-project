"use client";
import React from "react";
import { useRouter } from "next/router";
import useLoader from "@/hooks/loader";
import { getUserById } from "@/services/users";
import { Loader } from "@/components/Loader";
import Image from "next/image";

export default function UserDetails() {
  const router = useRouter();
  const userId = router.query.userId as string;

  const { isLoading: isUserLoading, data: user } = useLoader(
    async () => await getUserById(userId),
    [],
    [userId]
  );
  return (
    <div className="m-3">
      <h1>{user?.maidenName}</h1>
      {isUserLoading ? (
        <Loader />
      ) : (
        <div className="profile-container">
          <div className="left">
            <Image
              className="img-fluid"
              src={user?.image}
              alt={user?.firstName}
              width={100}
              height={200}
            />
          </div>
          <div className="right">
            <ul>
              <li>
                <strong>First Name:</strong> {user?.firstName}
              </li>
              <li>
                <strong>Last Name:</strong> {user?.lastName}
              </li>
              <li>
                <strong>Email:</strong> {user?.email}
              </li>
              <li>
                <strong>Phone:</strong> {user?.phone}
              </li>
              <li>
                <strong>Date Of Birth:</strong> {user?.birthDate}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
