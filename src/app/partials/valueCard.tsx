interface ValueCardProps {
	children: React.ReactNode;
}

export default function ValueCard({ children }: ValueCardProps) {
	return (
		<div className="bg-neutral-800 p-4 flex flex-col items-center justify-center">
			{children}
		</div>
	);
}
