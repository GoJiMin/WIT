import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { addUpdateToLibrary, removeFromLibrary } from "../services/firebase";

export function useBookMark({ title, description, author, cover, isbn13 }) {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();

  const addToUpdate = useMutation(
    ({ uid, book }) => addUpdateToLibrary(uid, book),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["books"]);
        queryClient.invalidateQueries(["bookMarks"]);
      },
    }
  );

  const removeBookMark = useMutation(
    ({ uid, isbn13 }) => removeFromLibrary(uid, isbn13),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["books"]);
        queryClient.invalidateQueries(["bookMarks"]);
      },
    }
  );

  const handleAdd = () => {
    const book = { title, description, author, cover, isbn13 };
    addToUpdate.mutate({ uid, book });
  };

  const handleDelete = () => {
    removeBookMark.mutate({ uid, isbn13 });
  };

  return { handleAdd, handleDelete, uid };
}
