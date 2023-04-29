import gsap from "gsap/dist/gsap";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { firstColumn } from "../index";

function Work() {
	const workId = useRouter().query.id;
	const router = useRouter();

	const work = firstColumn.find((item) => item.id === +workId);
	const tl = gsap.timeline();

	React.useEffect(() => {
		const card = document.querySelector(".show");
		const container = document.querySelector(".section");

		if (card) {
			tl.to(".title", { opacity: 0, duration: 0.3 })
				.to(".hide", { opacity: 0, duration: 0.3 })
				.to(
					".show",
					{
						scale: 1.3,
						duration: 1,
						overflow: "visible",
						x: -(card.getBoundingClientRect().left - 200),
					},
					"-=0.4"
				)
				.to(".description", {
					zIndex: 1,
					opacity: 1,
					x: 0,
					duration: 0.5,
				})
				.to(".content", { opacity: 1, display: "flex" });
		}
	}, [tl]);

	const handleReverse = () => {
		tl.reverse(2);

		setTimeout(() => {
			router.push("/#work");
		}, 2200);
	};

	return (
		<section
			className={`section w-full min-h-screen transition bg-[#17181c] mt-[-1px] flex flex-col 
       items-center relative overflow-x-hidden`}
		>
			<div className="absolute top-0 left-0 flex items-center justify-center h-[calc(100vh+1px)] flex-col w-full bg-[#17181c] z-20">
				<h1 className="title text-6xl font-bellefair">Our work</h1>
				<ul className="flex gap-8 mt-16 work w-[1300px] ">
					{firstColumn.map(({ src, id }) => (
						<li
							key={src}
							className={`flex gap-36 relative grayscale hover:grayscale-0  ${
								id === +workId ? "show grayscale-0 z-50 " : "hide "
							}`}
						>
							<Image
								src={src}
								width={300}
								height={320}
								alt=""
								className="object-cover rounded-xl w-[300px] h-[450px]  "
							/>

							<div
								className={`flex flex-col space-y-24 description opacity-0 translate-x-24 absolute left-[360px] min-w-[600px]`}
							>
								<button
									id="button"
									onClick={handleReverse}
									className="px-3 py-1 self-end text-center text-white transition duration-300 ease-in-out bg-[#17181c] border border-white rounded-full max-w-fit hover:bg-white hover:text-[#17181c]"
								>
									X
								</button>
								<p className="w-full leading-[36px] h-full text-xl font-bellefair">
									{work?.description}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>

			<section
				className={`content opacity-0 w-full min-h-screen flex flex-col bg-[#17181c] mt-[100vh]`}
			>
				{work && (
					<>
						<h1
							style={{
								background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('${work.bg}')`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundAttachment: "fixed",
							}}
							className="text-6xl text-center font-bellefair py-32"
						>
							{work.title}
						</h1>

						<div className="flex gap-36 w-full items-center mt-20 mb-2 justify-center">
							<p className="max-w-2xl text-2xl leading-9 font-bellefair ">
								{work.description2}
							</p>
							<Image
								src={work.large}
								alt={work.description2}
								width={800}
								height={1000}
								className="h-[900px] w-[600px] object-cover rounded-xl"
							/>
						</div>
					</>
				)}
			</section>
		</section>
	);
}

export default Work;
