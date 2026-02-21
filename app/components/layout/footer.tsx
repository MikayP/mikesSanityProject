import { getLinkUrl, getLinkTarget, getLinkRel } from "@/utils/linkHelpers";




<a 
  href={getLinkUrl(link)}
  target={getLinkTarget(link)}
  rel={getLinkRel(link)}
>
  Link text
</a>