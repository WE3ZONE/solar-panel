import {notFound} from "next/navigation";
import {Article} from "../../_components/Editorial";
import {news} from "../../_components/articles-data";
export function generateStaticParams(){return news.map(item=>({slug:item.slug}));}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=news.find(x=>x.slug===slug);if(!item)notFound();return <Article kind="news" item={item}/>;}
