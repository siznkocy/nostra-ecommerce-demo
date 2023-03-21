import { BsCartPlus } from "react-icons/bs";

type dataProp = {
  url: string;
  text: string;
  name: string;
  sale: number;
  price: number;
};

export const ProductExcerpt = ({ data }: dataProp) => {
  const AddCart = () => {
    console.log("Added");
  };

  return (
    <div>
      <article className="sm:min-w-[20rem] min-w-[14rem] sm:w-[32%] overflow-clip">
        <div
          className="w-full aspect-square rounded-md relative"
          style={{
            backgroundImage: `url(${data.url})`,
            backgroundColor: "lightgray",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {data.sale && (
            <div className="m-2 p-2 bg-red-500 w-fit absolute rounded-md">
              <p className="uppercase text-white font-semibold ">Sale</p>
            </div>
          )}
        </div>
        <div className="flex   justify-between pt-4">
          <div className="flex flex-col">
            <h5>{data.name}</h5>
            {!data.sale ? (
              <h6>${data.price}</h6>
            ) : (
              <div className="flex gap-2">
                <h6>${data.price * data.sale}</h6>
                <h5 className="line-through opacity-40">${data.price}</h5>
              </div>
            )}
          </div>
          <div>
            <button
              className="bg-[#1D242D] text-white p-4 rounded-md"
              onClick={AddCart}
            >
              <BsCartPlus />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};
