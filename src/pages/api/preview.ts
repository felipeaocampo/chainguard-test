import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  //  console.log("redirecting to slug");
  res.setPreviewData({});
  res.redirect(`/unchained/${slug}`);
}
