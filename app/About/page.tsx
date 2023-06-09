import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex items-center justify-between w-screen px-6">
      <p className="text-gray-600 tracking-wide leading-loose">
        2020年5月珈琲屋を退職し、エンジニアを目指して学習中です。
        <br />
        大切にしていることは、丁寧なコミュニケーションとレスポンスの速さ、
        <br />
        相手をよく観察することです。
        <br />
        珈琲ももちろんですが、ファッションやゲームなども好きです。
      </p>
      <div>
        <Image className="rounded-md" src="/me.png" width={600} height={500} alt="Nishio Ryoya" />
      </div>
    </div>
  );
};

export default AboutPage;
