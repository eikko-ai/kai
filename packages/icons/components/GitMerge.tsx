import * as React from 'react'

function SvgGitMerge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="git-merge_svg__feather git-merge_svg__feather-git-merge"
      {...props}
    >
      <circle cx={18} cy={18} r={3} />
      <circle cx={6} cy={6} r={3} />
      <path d="M6 21V9a9 9 0 009 9" />
    </svg>
  )
}

export default SvgGitMerge
