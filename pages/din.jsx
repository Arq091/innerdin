import Template from "../components/Template"

export default function Projects() {
  return (
    <Template>
      <main className="mt-20 mb-9 text-center flex-col flex gap-4">
        <h1 className="font-semibold text-xl">About Me.</h1>
        <p className="max-w-lg">
          I&apos;m a tall black man <i>probably</i> from State of Western Australia (yes).
          Being the Co-Founder of Larry Studios, I got a PhD in the Keynote University of Thailand <span style="color:darkGray">which is definitely a real university and not one I just made up two minutes ago</span> I have a 1600 FIDE
          rating (trust me).
        </p>
      </main>
    </Template>
  )
}
