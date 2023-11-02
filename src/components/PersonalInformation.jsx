import React from "react";
import styles from "./PersonalInformation.module.css";

export default function PersonalInformation() {
  return (
    <section className={styles.section}>
      <div>
        <p className={styles.title}>개인 정보 수집 및 이용 동의</p>
        <p className={styles.des}>
          1. 수집하려는 개인정보의 항목 : 성명, 이메일
        </p>
        <p className={styles.des}>
          2. 개인정보의 수집 및 이용목적 : 신청에 따른 본인확인 및 원활한
          의사소통 경로 확보
        </p>
        <p className={styles.des}>
          3. 개인정보의 보유 및 이용기간 : 모든 검토가 완료된 후 회신 즉시
          해당정보를 지체 없이 파기합니다.
        </p>
        <p className={styles.des}>
          4. 개인정보 수집 동의 거부권 : 개인정보 수집 동의에 거부할 수 있으며
          동의하지 않는 경우 의견 접수가 불가능합니다.
        </p>
        <p className={styles.des}>
          5. 그 밖의 사항은 개인정보취급방침을 준수합니다.
        </p>
      </div>
    </section>
  );
}
