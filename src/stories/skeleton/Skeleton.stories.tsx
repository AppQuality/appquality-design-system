import { Meta, StoryFn } from "@storybook/react";
import { Card } from "../card/Card";
import { BSCol, BSGrid, CSSGrid } from "../layout/Layout";
import { Skeleton } from "./Skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
} as Meta;

const SkeletonTemplate: StoryFn = (props) => (
  <div style={{ backgroundColor: "#f0f5f7", minHeight: "100vh" }}>
    <BSGrid>
      <BSCol size="col-lg-9 aq-order-1 aq-order-0-lg">
        <Skeleton>
          <Skeleton.Item
            width="160px"
            height="1.5em"
            backgroundColor="#e0eaf0"
            className="aq-mb-2"
          />
          <Card className="aq-mb-3">
            <Skeleton.Item
              width="80%"
              height="1em"
              style={{ maxWidth: "400px" }}
              className="aq-mb-2"
            />
            <Skeleton.Item
              width="90%"
              height="1em"
              style={{ maxWidth: "450px" }}
              className="aq-mb-3"
            />
            <CSSGrid min="200px" gutter="50px">
              <div>
                <Skeleton.Item width="50px" height="1em" className="aq-mb-2" />
                <Skeleton.Item
                  width="200px"
                  height="1.5em"
                  className="aq-mb-3"
                />
                <Skeleton.Item width="50px" height="1em" className="aq-mb-2" />
                <Skeleton.Item
                  width="200px"
                  height="1.5em"
                  className="aq-mb-3"
                />
                <Skeleton.Item width="50px" height="1em" className="aq-mb-2" />
                <Skeleton.Item
                  width="200px"
                  height="150px"
                  className="aq-mb-3"
                />
                <Skeleton.Item width="50px" height="1em" className="aq-mb-2" />
                <Skeleton.Item
                  width="200px"
                  height="1.5em"
                  className="aq-mb-3"
                />
              </div>
              <div>
                <Skeleton.Item width="50px" height="1em" className="aq-mb-2" />
                <Skeleton.Item
                  width="200px"
                  height="1.5em"
                  className="aq-mb-3 "
                />
                <Skeleton.Item width="50px" height="1em" className="aq-mb-2" />
                <Skeleton.Item
                  width="200px"
                  height="1.5em"
                  className="aq-mb-3 "
                />
              </div>
            </CSSGrid>
          </Card>
        </Skeleton>
      </BSCol>
    </BSGrid>
  </div>
);

export const BasicSkeleton = SkeletonTemplate.bind({});
