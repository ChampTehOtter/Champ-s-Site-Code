import { IResourceComponentsProps } from "@refinedev/core";
import { Col, Row } from "antd";
import { MediaList } from "components";
import { MEDIA_SECTIONS } from "store";

export const HypnoPage: React.FC<IResourceComponentsProps> = () => {
  return (
    <>
      <Row>
          <Col
              xs={{ span: 22, offset: 1 }} 
              sm={{ span: 18, offset: 3}}
              // lg={{ span: 8, offset: 8}} 
              // xl={{ span: 4, offset: 10 }}
          >
              <MediaList section={MEDIA_SECTIONS.HYPNO} />
          </Col>
      </Row>

    </>
  );
};
