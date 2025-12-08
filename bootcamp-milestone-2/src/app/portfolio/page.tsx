import style from "./portfolio.module.css";
import Portfolio from "@/database/portfolioSchema";
import connectDB from "@/database/db";
import PortfolioPreview from "@/components/portfolioPreview";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

async function getPortfolios() {
  await connectDB();
  try {
    const portfolios = await Portfolio.find().sort({ date: -1 }).orFail();
    return portfolios;
  } catch (err) {
    return null;
  }
}

export default async function portfolio({ params }: IParams) {
  // Fetch portfolios using your function
  const portfolios = await getPortfolios();

  if (!portfolios) {
    return <div>No portfolios found.</div>;
  }
  return (
    <div>
      <h1 className="pageTitle">👏 Portfolio</h1>
      <div className={style.project}>
        {portfolios.map((portfolio: any, index: number) => (
          <PortfolioPreview {...portfolio.toObject()} key={index} />
        ))}
      </div>
    </div>
  );
}
