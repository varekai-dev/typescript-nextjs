import { Htag, Button, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" className="test" arrow="right">
        Knopka
      </Button>
      <Button appearance="ghost" arrow="right">
        Knopka
      </Button>
      <P size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        perspiciatis impedit asperiores architecto assumenda iste atque aliquam
        odio veniam, tempore aspernatur rerum nesciunt, magni nemo error
        quisquam ipsum eum accusamus. Saepe facilis dolore quia aliquid fuga
        labore accusantium minima maxime rem excepturi praesentium fugit
        deserunt iusto, recusandae repellat ex explicabo debitis nulla dolorum
        quos laborum natus optio ea deleniti? Ipsa. Eligendi explicabo facilis
        totam nostrum omnis ipsa molestiae magni asperiores pariatur dolorum
        facere aut dolore exercitationem ipsum accusantium quas suscipit
        doloribus corrupti, dignissimos quisquam similique? Atque enim neque
        numquam perferendis! Expedita tenetur ratione veritatis sint sunt
        repellendus dolores ex nobis! Deserunt repudiandae asperiores
        perferendis dolor iste quasi eaque a, quos est natus consectetur
        molestiae dignissimos ipsum blanditiis nulla vel cupiditate! Vitae error
        ut id dignissimos dolore laboriosam, cupiditate ipsa fuga, mollitia
        excepturi harum optio voluptas perferendis in. Obcaecati culpa
        voluptate, minima earum, totam illo deserunt, molestiae commodi
        reprehenderit sapiente numquam.
      </P>
      <Tag size="m" color="green">
        Hello
      </Tag>
      <Tag size="s" color="red">
        Hello
      </Tag>
      <Tag size="m" color="grey">
        Hello
      </Tag>
      <Tag size="m">Hello</Tag>
    </>
  );
}
