type Props = {
  variant: "primary" | "secondary";
  content: React.ReactNode;
};

type ButtonProps = {
  content: React.ReactNode;
};

export function Button({ variant, content }: Props) {
  variant === "primary" ? (
    <PrimaryBtn content={content} />
  ) : (
    <SecondaryBtn content={content} />
  );

  return <PrimaryBtn content={content} />;
}

const PrimaryBtn = ({ content }: ButtonProps) => {
  return <button>{content}</button>;
};

const SecondaryBtn = ({ content }: ButtonProps) => {
  return <button>{content}</button>;
};
