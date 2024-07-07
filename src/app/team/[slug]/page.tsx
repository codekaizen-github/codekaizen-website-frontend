import { notFound } from "next/navigation";

export default function TeamMember({ params }: { params: { slug: string } }) {
    if (params.slug !== "andrew-dawes" && params.slug !== "missie-dawes" && params.slug !== "logan-sauers" && params.slug !== "kaitlyn-wyland") {
        notFound();
    }
    return (
        <div className="">Team member page for { params.slug }</div>
    );
}
