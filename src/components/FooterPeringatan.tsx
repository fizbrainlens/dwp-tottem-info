export default function FooterPeringatan() {
	return (
		<div
			className="fixed bottom-0 left-0 z-40 flex w-full items-center gap-6
				bg-black px-[70px] py-[38px] text-white"
		>
			<div
				className="grid size-[108px] flex-none place-items-center rounded-full
					border-[5px] border-white text-[42px] font-bold leading-none tracking-tight"
				style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
			>
				21+
			</div>
			<p
				className="flex-1 text-center text-[22px] leading-[30px]"
				style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
			>
				Produk ini tidak bebas risiko dan mengandung nikotin yang menyebabkan
				ketergantungan. Hanya diperuntukkan bagi pengguna dewasa (21+). Dilarang
				menjual dan memberi kepada orang di bawah usia 21 tahun dan perempuan
				hamil.
			</p>
		</div>
	);
}
