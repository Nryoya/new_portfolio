import Image from "next/image";

interface Array {
  name: string;
  description: string;
}

const WorksPage = (): JSX.Element => {
  const imgArr: Array[] = [
    {name: "fashion", description: "自分で考えた静的サイトです。"},
    {name: "rainbow", description: "友人依頼で作成したCRUD処理Webアプリです。"},
    {name: "school", description: "schoolに通っていた際に作成した静的サイトです。"},
  ];
  return (
    <div className="overflow-x-scroll py-8">
      <h3 className="text-6xl my-5 px-6 bg-gradient-to-r from-purple-600 to-purple-400 inline-block text-transparent bg-clip-text">Works</h3>
      <div className="flex justify-around w-screen px-6">
        {imgArr.map((item) => {
          return (
            <div className="mr-10" key={item.name}>
              <div>
                <Image
                  className="rounded-md"
                  src={"/" + item.name + ".png"}
                  width={500}
                  height={500}
                  alt={item.name}
                />
              </div>
              <p className="pt-3 text-gray-900">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorksPage;
