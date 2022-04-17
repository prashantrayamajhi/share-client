import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ShowToast } from "../ShowToast";
import formStyles from "../../styles/form/form.module.scss";
import { toast } from "react-toastify";

export default function InvestorForm({ title }) {
  const [submitting, setSubmitting] = useState(false);
  const onInvestFormSubmit = (event) => {
    event.preventDefault();
    console.log("values", investorForm);
    const { isTOSChecked } = investorForm;
    if (!isTOSChecked) {
      toast.error("Please agree to Terms and Conditions");
    } else {
      setSubmitting(true);
      // do api call and stuffs
      setSubmitting(false);
    }
  };

  const [investorForm, setInvestorForm] = useState({
    investment: "",
    name: "",
    address: "",
    email: "",
    phone: "",
    isLoading: false,
    isTOSChecked: false,
    isMailListChecked: false,
  });

  function onFormDataEntry(event) {
    const { target } = event;
    const { name, value } = target;
    setInvestorForm({ ...investorForm, [name]: value });
  }

  return (
    <>
      <ShowToast />
      <form className={formStyles.formWrapper} onSubmit={onInvestFormSubmit}>
        <p className={formStyles.heading}>
          You are interested to invest in <span>{title}</span>.
        </p>
        <p>
          By sending request to <span>{title}</span> , you are proposing an
          investment.
        </p>
        <div className={formStyles.internalWrapper}>
          <p className={formStyles.heading}>
            <span>1. Investment Offered</span>
          </p>
          <input
            required
            onChange={onFormDataEntry}
            type="Number"
            name="investment"
            placeholder="Rs. 1,00,000"
          />
        </div>
        <div className={formStyles.secondInternalWrapper}>
          <p className={formStyles.heading}>
            <span>2. About You</span>
          </p>
          <p>
            <span>Important Information:</span> To help the startup get proper
            funding proposals through genuine investors, we verify and record
            information that identifies each person who opens an account.
          </p>
          <p>
            <span>What this means for you:</span> When you open an account, we
            ask for name, address, date of birth, and other information that
            will allow us to identify you. We make sure your information is
            encrypted and secured.
          </p>
          <input
            required
            onChange={onFormDataEntry}
            type="text"
            name="name"
            placeholder="Full Name"
          />
          <input
            required
            onChange={onFormDataEntry}
            type="address"
            name="address"
            placeholder="Address"
          />
          <input
            required
            onChange={onFormDataEntry}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            required
            onChange={onFormDataEntry}
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />
          <div
            onClick={() =>
              setInvestorForm({
                ...investorForm,
                isTOSChecked: !investorForm.isTOSChecked,
              })
            }
            className={formStyles.tosStyles}
          >
            <input
              checked={investorForm.isTOSChecked}
              onChange={() =>
                setInvestorForm({
                  ...investorForm,
                  isTOSChecked: !investorForm.isTOSChecked,
                })
              }
              type="checkbox"
              name="tos"
              id="tos"
              style={{ marginRight: "1rem" }}
            />
            <span>
              I have read and agreed to Avaasar's Terms of Use and Privacy
              Policy. I further more acknowledge that indication of the
              investment request to the startups
            </span>
          </div>
          <div
            onClick={() =>
              setInvestorForm({
                ...investorForm,
                isMailListChecked: !investorForm.isMailListChecked,
              })
            }
            className={formStyles.tosStyles}
          >
            <input
              checked={investorForm.isMailListChecked}
              onChange={() =>
                setInvestorForm({
                  ...investorForm,
                  isTOSChecked: !investorForm.isMailListChecked,
                })
              }
              type="checkbox"
              name="tos"
              id="tos"
              style={{ marginRight: "1rem" }}
            />
            <span>
              I would like to receive communications with such as new
              opportunities, company updates, and event invitaitons.
            </span>
          </div>
          <button
            disabled={submitting}
            type="submit"
            className={formStyles.submitFormButton}
          >
            <FontAwesomeIcon icon={faPaperPlane} className={formStyles.icon} />
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}
