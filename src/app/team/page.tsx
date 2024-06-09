import Image from "next/image";

export default function About() {
    const teamMembers = [
        {
            name: "Andrew Dawes",
            role: "The Sensei",
            shortBio: "Andrew guides us with the wisdom of a thousand Google searches and the patience of a laptop during a software update.",
            photoUrl:"/andrew-dawes.jpg"
        },
        {
            name: "Missie Dawes",
            role: "The Sage",
            shortBio: "Missie creates user interfaces with the calm precision of a yogi flowing through sun salutations",
            photoUrl:"/missie-dawes.jpg"
        },
        {
            name: "Logan Sauers",
            role: "The Ninja",
            shortBio: "Logan pursues perfection with the exactness of a master swordsman, seeking answers with the patience of a monk in meditation.",
        },
        {
            name: "Kaitlyn Wyland",
            role: "The Samurai",
            shortBio: "Kaitlyn fearlessly tackles challenging projects with the boldness of a warrior, mastering tasks with a spirit as free as the wind.",
        },
    ];

    return (
        <>
            <h1 className="text-stone-700 text-3xl font-semibold pb-6">Meet Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamMembers.map((member) => (
                    <div key={member.name} className="bg-stone-200 p-4 rounded-lg">
                        <Image src={member.photoUrl || "/default-headshot.png"} alt={member.name} width={200} height={200} className="rounded-full mr-auto ml-auto mb-4" />
                        <h2 className="text-stone-700 text-xl font-semibold">{member.name}</h2>
                        <p className="text-stone-700 text-lg">{member.role}</p>
                        <p className="text-stone-700">{member.shortBio}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
