import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  res.setPreviewData({});
  res.redirect(slug === "/" ? slug : `/${slug}`);
}
