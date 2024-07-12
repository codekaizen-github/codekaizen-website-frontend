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
            photoUrl: "/logan-sauers.jpg",
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
            <h1 className="text-3xl font-semibold pb-6">Meet Our Team</h1>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                {teamMembers.map((member) => (
                    <div key={member.name} className="bg-neutral-800 rounded-lg">
                        <div className="flex items-center h-full">
                            <div className="flex flex-wrap items-center py-4 pl-4 md:flex-nowrap">
                                {member.photoUrl &&
                                    <Image src={member.photoUrl} alt={member.name} width={150} height={150} className="rounded-full mb-4 h-40 w-40 md:mb-0 sm:mr-4" />
                                }
                                <div className="flex gap-4 mr-4">
                                    <div className="member-content">
                                        <h2 className="text-xl font-semibold">{member.name}</h2>
                                        <p className="text-lg">{member.role}</p>
                                        <p className="">{member.shortBio}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-full p-4 rounded-r-lg hover:bg-neutral-700 hover:cursor-pointer">
                                <Link href={`/team/${member.slug}`} className="">
                                    <FontAwesomeIcon icon={faAngleRight} className="font-lg" size="lg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
