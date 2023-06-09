import Image from "next/image";

const AboutPage = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between w-screen px-6">
      <div>
        <h3 className="text-6xl my-5 bg-gradient-to-r from-purple-600 to-purple-400 inline-block text-transparent bg-clip-text">About</h3>
        <p className="text-gray-900 tracking-wide leading-loose">
          2020年5月珈琲屋を退職し、エンジニアを目指して学習中です。
          <br />
          大切にしていることは、丁寧なコミュニケーションとレスポンスの速さ、
          <br />
          相手をよく観察することです。
          <br />
          珈琲ももちろんですが、ファッションやゲームなども好きです。
        </p>
      </div>
      <div>
        <Image className="rounded-md" src="/me.png" width={600} height={500} alt="Nishio Ryoya" />
      </div>
    </div>
  );
};

export default AboutPage;
