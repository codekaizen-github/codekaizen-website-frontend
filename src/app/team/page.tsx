import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    const teamMembers = [
        {
            name: "Kaitlyn Wyland",
            role: "The Samurai",
            shortBio: "Kaitlyn fearlessly tackles challenging projects with the boldness of a warrior, mastering tasks with a spirit as free as the wind.",
            slug: "kaitlyn-wyland",
        },
        {
            name: "Logan Sauers",
            role: "The Ninja",
            shortBio: "Logan pursues perfection with the exactness of a master swordsman, seeking answers with the patience of a monk in meditation.",
            slug: "logan-sauers",
        },
        {
            name: "Missie Dawes",
            role: "The Sage",
            shortBio: "Missie creates user interfaces with the exhilaration of a yogi flowing through sun salutations.",
            photoUrl:"/missie-dawes.jpg",
            slug: "missie-dawes",
        },
        {
            name: "Andrew Dawes",
            role: "The Sensei",
            shortBio: "Andrew guides us with the wisdom of a thousand Google searches and the patience of a laptop during a software update.",
            photoUrl: "/andrew-dawes.jpg",
            slug: "andrew-dawes",
        }
        ,
    ];

    return (
        <>
            <h1 className="text-stone-700 text-3xl font-semibold pb-6">Meet Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamMembers.map((member) => (
                    <div key={member.name} className="bg-stone-200/[0.7] p-4 rounded-lg">
                        {member.photoUrl &&
                            <Image src={member.photoUrl} alt={member.name} width={200} height={200} className="rounded-full mr-auto ml-auto mb-4" />
                        }
                        <div className="flex">
                            <div>
                                <h2 className="text-stone-700 text-xl font-semibold">{member.name}</h2>
                                <p className="text-stone-700 text-lg">{member.role}</p>
                                <p className="text-stone-700">{member.shortBio}</p>
                            </div>
                            <div className="flex items-center">
                                <Link href={`/team/${member.slug}`} className="hover-circle transform hover:scale-110 active:scale-90 transition-all duration-500">
                                    <FontAwesomeIcon icon={faAngleRight} className="text-stone-700 font-lg" size="lg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
