import Image from "next/image";

export default async function Hero() {
  return (
    <section className="packages-hero">
      <h1>
        Tax & Accounting <span>Packages</span>
      </h1>
      <p>
        Flexible plans for every business size and activity level. Select the
        package that aligns with your financial needs.
      </p>
      <div className="packages-container">
        {/* Package 1: SME */}
        <div className="packages-card">
          <h2 className="packages-card-header">SME</h2>
          <div className="packages-card-body">
            <ul className="packages-card-list">
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Bookkeeping
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Financial Statement Finalization
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Financial Reporting
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Corporate Tax Registration
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Physical Meetings
              </li>
            </ul>
            <button
              className="packages-card-btn"
              data-variant="outline"
              type="button"
            >
              Select
            </button>
          </div>
        </div>
        {/* Package 2: Classic VAT/CT */}
        <div className="packages-card">
          <h2 className="packages-card-header">Classic VAT/CT</h2>
          <div className="packages-card-body">
            <ul className="packages-card-list">
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Bookkeeping
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Financial Statement Finalization
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Financial Reporting
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Corporate Tax Registration
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Corporate Tax Filing
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                VAT Registration
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                VAT Filing
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Physical Meetings
              </li>
            </ul>
            <button
              className="packages-card-btn"
              data-variant="outline"
              type="button"
            >
              Select
            </button>
          </div>
        </div>
        {/* Package 3: Advanced */}
        <div className="packages-card">
          <h2 className="packages-card-header">Advanced</h2>
          <div className="packages-card-body">
            <ul className="packages-card-list">
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Bookkeeping
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Financial Statement Finalization
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Financial Reporting
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Corporate Tax Registration
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Corporate Tax Filing
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                VAT Amendments
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                VAT Registration
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                VAT Return
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Ongoing Advisory Support
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Physical Meetings
              </li>
            </ul>
            <button
              className="packages-card-btn"
              data-variant="outline"
              type="button"
            >
              Select
            </button>
          </div>
        </div>
        {/* Package 4: Premium */}
        <div className="packages-card">
          <h2 className="packages-card-header">Premium</h2>
          <div className="packages-card-body">
            <ul className="packages-card-list">
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Bookkeeping
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Financial Statement Finalization
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Financial Reporting
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Corporate Tax Registration
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Corporate Tax Filing
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                VAT Amendments
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                VAT Registration
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                VAT Return
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Ongoing Advisory Support
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Dedicated Compliance Manager
              </li>
              <li className="packages-card-list-item">
                <Image
                  src={"/icons/double-tick.svg"}
                  alt="Double Tick"
                  height={24}
                  width={24}
                />
                Physical Meetings
              </li>
            </ul>
            <button
              className="packages-card-btn"
              data-variant="outline"
              type="button"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
