// import Image from "next/image";
// import Link from "next/link";
import MapsButton from "@/components/MapsButton";
// import { Button } from "@/components/ui/button";

export default function NavLegends() {
	return (
		<div
			className="flex flex-col bottom-0 absolute w-fit mx-12
				gap-7 py-15 px-5 border-2 rounded-4xl items-center mb-10 font-iqos z-10
				bg-linear-to-t from-[#17898f] from-0% to-transparent to-60%"
		>
			<h3 className="uppercase text-[#20d4d5] text-6xl font-semibold text-center bg-[#35303f] p-3 size-fit -mt-[105px]">
				LEGENDS
			</h3>

			<div className="flex justify-between gap-5 flex-wrap">
                <MapsButton title="Registration Booth" iconUrl="icon-regbooth.png" linkUrl="?page=regbooth" />
                <MapsButton title="House of IQOS" iconUrl="icon-houseofiqos.png" linkUrl="?page=houseofiqos" />
                <MapsButton title="IQOS Land" iconUrl="icon-iqosland.png" linkUrl="?page=iqosland" />
                <MapsButton title="Tunnel Experience" iconUrl="icon-tunnelexperience.png" linkUrl="?page=tunnelexperience" />
                <MapsButton title="Stage 3" iconUrl="icon-stage3.png" linkUrl="?page=stage3" />
                <MapsButton title="VVIP Blowfish" iconUrl="icon-vvipblowfish.png" linkUrl="?page=vvipblowfish" />
                <MapsButton title="Q RIDE Shelter A" iconUrl="icon-qride.png" linkUrl="?page=qrideshelter" />
                <MapsButton title="Keyhole Portal" iconUrl="icon-keyhole-portal.png" linkUrl="?page=keyholeportal" />
                <MapsButton title="Penthouse" iconUrl="icon-penthouse.png" linkUrl="?page=penthouse" />
                <MapsButton title="Giant Map" iconUrl="icon-giantmap.png" linkUrl="?page=giantmap" />
                <MapsButton title="Stage 2" iconUrl="icon-stage.png" linkUrl="?page=stage2" />
                <MapsButton title="The Discovery Deck" iconUrl="icon-thediscoverydeck.png" linkUrl="?page=thediscoverydeck" />
                <MapsButton title="Q RIDE Shelter B" iconUrl="icon-qride.png" linkUrl="?page=qridestation" />
                <MapsButton title="Beats & Bus" iconUrl="icon-drumnbus.png" linkUrl="?page=drumnbus" />
                <MapsButton title="Stage 1" iconUrl="icon-stage.png" linkUrl="?page=stage1" />
            </div>

			{/* <div className="flex justify-around gap-5">
				<MapsButton
					title="Stage 1"
					iconUrl="icon-stage.png"
					linkUrl="?page=stage1"
				/>
				<MapsButton
					title="Stage 2"
					iconUrl="icon-stage.png"
					linkUrl="?page=stage2"
				/>
				<MapsButton
					title="Stage 3"
					iconUrl="icon-stage3.png"
					linkUrl="?page=stage3"
				/>
			</div>

			<div className="flex justify-around gap-5">
				<MapsButton
					title="Registration Booth"
					iconUrl="icon-regbooth.png"
					linkUrl="?page=regbooth"
				/>
				<MapsButton
					title="Giant Map"
					iconUrl="icon-giantmap.png"
					linkUrl="?page=giantmap"
				/>
				<MapsButton
					title="The Discovery Deck"
					iconUrl="icon-thediscoverydeck.png"
					linkUrl="?page=thediscoverydeck"
				/>
			</div>

			<div className="flex justify-around gap-5">
				<MapsButton
					title="Q Ride Shelter"
					iconUrl="icon-qride.png"
					linkUrl="?page=qrideshelter"
				/>
				<MapsButton
					title="Keyhole Portal"
					iconUrl="icon-keyhole-portal.png"
					linkUrl="?page=keyholeportal"
				/>
				<MapsButton
					title="Penthouse"
					iconUrl="icon-penthouse.png"
					linkUrl="?page=penthouse"
				/>
			</div>

			<div className="flex justify-around gap-5">
				<MapsButton
					title="Q Ride Station"
					iconUrl="icon-qride.png"
					linkUrl="?page=qridestation"
				/>
				<MapsButton
					title="House of IQOS"
					iconUrl="icon-houseofiqos.png"
					linkUrl="?page=houseofiqos"
				/>
				<MapsButton
					title="VVIP Blowfish"
					iconUrl="icon-vvipblowfish.png"
					linkUrl="?page=vvipblowfish"
				/>
			</div>

			<div className="flex justify-around gap-5">
				<MapsButton
					title="Drum & Bus"
					iconUrl="icon-drumnbus.png"
					linkUrl="?page=drumnbus"
				/>
				<MapsButton
					title="Iqos Land"
					iconUrl="icon-iqosland.png"
					linkUrl="?page=iqosland"
				/>
				<div className="w-[300px]">&nbsp;</div>
			</div> */}

			{/* <div className="flex mt-16 mb-7">
				<Button
					variant="ghost"
					asChild
					className="hover:bg-transparent hover:text-white mr-[150px]"
				>
					<Link href="#" className="flex">
						<div className="text-2xl uppercase tracking-[5px] pr-10">
							Program <br></br>Privileges
						</div>

						<Image
							src="/icon/icon-next-nav.png"
							alt="Icon next nav"
							width={80}
							height={80}
						/>
					</Link>
				</Button>

				<Button
					variant="ghost"
					asChild
					className="hover:bg-transparent hover:text-white"
				>
					<Link href="#" className="flex">
						<div className="text-2xl uppercase tracking-[5px] pr-10">
							Stage <br></br>Rundown
						</div>

						<Image
							src="/icon/icon-next-nav.png"
							alt="Icon next nav"
							width={80}
							height={80}
						/>
					</Link>
				</Button>
			</div> */}
		</div>
	);
}
