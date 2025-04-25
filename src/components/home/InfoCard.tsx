import { ReactNode } from "react";

const InfoCard = ({
  title,
  content,
}: {
  title: string;
  content?: ReactNode;
}) => {
  return (
    <div className="bg-background rounded-md p-3">
      <p className="text-lg font-bold">{title}</p>
      <div className="flex flex-col gap-2 mt-2">{content}</div>
    </div>
  )
}
export default InfoCard