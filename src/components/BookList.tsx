import { For, createSignal } from "solid-js";
import { Book } from "./types";

interface BookListProps {
  books: Book[];
}

export function BookList(props: BookListProps) {
  const totalBooks = () => props.books.length;

  return (
    <>
      <h2>My books ({totalBooks()})</h2>
      <ul>
        <For each={props.books}>
          {(book) => {
            return (
              <li>
                {book.title}

                <span style={{ "font-style": "italic" }}>({book.author})</span>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
