import React from "react";
import Image from "next/image";
import BookCover from "@/components/BookCover";
import BorrowBook from "@/components/BorrowBook";
import { db } from "@/database/db";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

interface Props extends Book {
  userId: string;
}

const BookOverview = async ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverUrl,
  id,
  userId,
}: Props) => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const borrowingEligibility = {
    isEligible: availableCopies > 0 && user?.status === "APPROVED",
    message:
      availableCopies <= 0
        ? "Book is not available"
        : "You are not eligible to borrow this book",
  };

  return (
    <section className="book-overview min-h-screen p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section - Book Details */}
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {title}
          </h1>

          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              By{" "}
              <span className="font-semibold text-purple-400">{author}</span>
            </p>

            <p className="text-xl text-gray-300">
              Category{" "}
              <span className="font-semibold text-pink-400">{genre}</span>
            </p>

            <div className="flex items-center gap-2">
              <Image src="/icons/star.svg" alt="star" width={28} height={28} />
              <p className="text-xl text-yellow-400">{rating}</p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg border border-gray-700/50 shadow-lg">
            <p className="text-gray-300">
              Total Books:{" "}
              <span className="font-semibold text-gray-100">{totalCopies}</span>
            </p>
            <p className="text-gray-300">
              Available Books:{" "}
              <span className="font-semibold text-gray-100">
                {availableCopies}
              </span>
            </p>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">{description}</p>

          {user && (
            <div className="mt-8">
              <BorrowBook
                bookId={id}
                userId={userId}
                borrowingEligibility={borrowingEligibility}
              />
            </div>
          )}
        </div>

        {/* Right Section - Book Cover */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative transform transition-all hover:scale-105">
            <BookCover
              variant="wide"
              className="z-10 shadow-2xl border-2 border-gray-700/50"
              coverColor={coverColor}
              coverImage={coverUrl}
            />

            <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
              <BookCover
                variant="wide"
                coverColor={coverColor}
                coverImage={coverUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;