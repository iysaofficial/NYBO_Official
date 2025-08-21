type HeaderCompProps = {
  header: string;
};

const HeaderComp = ({ header }: HeaderCompProps) => {
  return (
    <section className="header-section">
      <div className="header-content">
        <h2>{header}</h2>
      </div>
    </section>
  );
};

export default HeaderComp;
