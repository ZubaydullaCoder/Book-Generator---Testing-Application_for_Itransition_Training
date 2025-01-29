'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteBooks } from '@/hooks/use-books/use-infinite-books';
import { BookRow } from '../books-row';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

const COLUMNS = ['#', 'ISBN', 'Title', 'Author(s)', 'Publisher'];

export function BooksTable() {
  const { ref: bottomRef, inView } = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    error,
  } = useInfiniteBooks();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        Error loading books: {error.message}
      </div>
    );
  }

  return (
    <div className="relative">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            {COLUMNS.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.pages.map((page) =>
            page.books.map((book) => <BookRow key={book.id} book={book} />)
          )}
          {(isLoading || isFetchingNextPage) && (
            <>
              {Array.from({ length: 3 }).map((_, i) => (
                <TableRow key={i} className="h-24 animate-pulse">
                  <TableCell className="w-[50px]" />
                  {COLUMNS.map((_, j) => (
                    <TableCell key={j}>
                      <div className="h-4 w-full rounded bg-muted"></div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
      <div ref={bottomRef} className="h-4" />
    </div>
  );
}
