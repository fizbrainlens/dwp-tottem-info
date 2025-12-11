import Image from "next/image";

export default function FooterPeringatan() {
	return (
		<div className="w-full flex bg-black text-white fixed bottom-0 gap-4 p-6 mx-auto">
			<div className="w-1/5 flex items-center justify-center">
				<Image src="/logo-21plus.png" alt="Logo 21+" width={80} height={80} />
			</div>
			<div className="w-4/5">
				<div className="w-full h-full flex items-center justify-center text-center text-lg">
					Produk ini tidak bebas risiko dan mengandung nikotin yang menyebabkan
					ketergantungan. Hanya diperuntukkan bagi pengguna dewasa (21+).
					Dilarang menjual dan memberi kepada orang di bawah usia 21 tahun dan
					perempuan hamil.
				</div>
			</div>
		</div>
	);
}
