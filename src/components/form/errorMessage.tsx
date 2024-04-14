interface Props {
  id: string;
  message: string;
}

export default function ErrorMessage({ id, message }: Props) {
  return (
    <p className="mt-2 text-sm text-left text-red-600" id={id}>
      {message}
    </p>
  );
}
