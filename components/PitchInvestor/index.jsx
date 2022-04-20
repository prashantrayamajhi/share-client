import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ShowToast } from "../ShowToast";
import formStyles from "../../styles/form/form.module.scss";
import { toast } from "react-toastify";
import Axios from "../../api/server";
import { useRouter } from "next/router";

export default function PitchInvestor({ user }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const onInvestFormSubmit = async (event) => {
    event.preventDefault();
    const { isTOSChecked, dataUsageChecked } = pitchForm;
    if (!isTOSChecked || !dataUsageChecked) {
      toast.error("Please agree to Terms and Conditions");
    } else {
      setSubmitting(true);
      try {
        const res = await Axios.post(`/posts/startup/pitch`, pitchForm);
        console.log("response after submit", res);
        if (res.status === 200) {
          toast.success(res.data.msg || "Email sent successfully!!!");
        }
        event.target.reset();
        setSubmitting(false);
      } catch (e) {
        console.log(e);
        toast.error("Something went wrong!!!");
        setSubmitting(false);
      }
      // do api call and stuffs
      setSubmitting(false);
    }
  };

  const [pitchForm, setPitchForm] = useState({
    name: "",
    email: "",
    businessType: "",
    category: "",
    pitchTitle: "",
    summary: "",
    businessName: "",
    isTOSChecked: false,
    dataUsageChecked: false,
  });

  function onFormDataEntry(event) {
    const { target } = event;
    const { name, value } = target;
    setPitchForm({ ...pitchForm, [name]: value });
  }

  return (
    <>
      <ShowToast />
      <form className={formStyles.formWrapper} onSubmit={onInvestFormSubmit}>
        <p className={formStyles.heading}>
          You are sending a pitch request to <span>{user.name}</span>.
        </p>
        <p>
          <strong>Important Information</strong>: To insure to get a valid
          pitch, we
          <br /> ask for name and email that allows us to identify you. We make
          <br /> your proposal of request is confidential and secured.
          <br />
          <br />
        </p>
        <div className={formStyles.secondInternalWrapper}>
          <p className={formStyles.heading}>
            <span>Information</span>
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
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <select
            style={{
              height: "2.5rem",
              paddingLeft: "1rem",
              color: "#777",
              fontSize: "1rem",
            }}
            name="businessType"
            id="typeOfBusiness"
          >
            <option value="Agriculture">Agriculture</option>
            <option value="Construction">Construction</option>
            <option value="Finance">Finance</option>
            <option value="Health">Health</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="RealEstate">Real Estate</option>
            <option value="Other">Other</option>
          </select>
          <input
            required
            onChange={onFormDataEntry}
            type="text"
            name="businessName"
            placeholder="Business Name"
          />
          <input
            required
            onChange={onFormDataEntry}
            type="text"
            name="category"
            placeholder="Business Category"
          />
          <input
            required
            onChange={onFormDataEntry}
            type="text"
            name="pitchTitle"
            placeholder="Pitch Title"
          />
          <textarea
            className={formStyles.textArea}
            required
            onChange={onFormDataEntry}
            type="text"
            name="summary"
            rows="8"
            style={{ padding: "1rem" }}
            placeholder="Pitch Summary"
          ></textarea>
          <div
            onClick={() =>
              setPitchForm({
                ...pitchForm,
                isTOSChecked: !pitchForm.isTOSChecked,
              })
            }
            className={formStyles.tosStyles}
          >
            <input
              checked={pitchForm.isTOSChecked}
              onChange={() =>
                setPitchForm({
                  ...pitchForm,
                  isTOSChecked: !pitchForm.isTOSChecked,
                })
              }
              type="checkbox"
              name="tos"
              id="tos"
              style={{ marginRight: "1rem" }}
            />
            <span>
              By clicking submit I acknowledge Avasar's Privacy policy and Terms
              of use.
            </span>
          </div>
          <div
            onClick={() =>
              setPitchForm({
                ...pitchForm,
                dataUsageChecked: !pitchForm.dataUsageChecked,
              })
            }
            className={formStyles.tosStyles}
          >
            <input
              checked={pitchForm.dataUsageChecked}
              onChange={() =>
                setPitchForm({
                  ...pitchForm,
                  dataUsageChecked: !pitchForm.dataUsageChecked,
                })
              }
              type="checkbox"
              name="tos"
              id="tos"
              style={{ marginRight: "1rem" }}
            />
            <span>
              I provide the concent for procesing data to prepare an estimation
              of my project and/or contacting me
            </span>
          </div>
          <button
            disabled={submitting}
            type="submit"
            className={formStyles.submitFormButton}
          >
            <FontAwesomeIcon icon={faPaperPlane} className={formStyles.icon} />
            {submitting ? "Submitting..." : "Pitch Investor"}
          </button>
        </div>
      </form>
    </>
  );
}
