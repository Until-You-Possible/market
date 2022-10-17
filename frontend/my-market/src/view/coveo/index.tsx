
import React from "react";

import {
    AtomicTimeframe,
    AtomicLoadMoreResults,
    AtomicSearchInterface,
    AtomicSearchBox,
    AtomicRatingRangeFacet,
    AtomicLayoutSection,
    AtomicFacetManager,
    AtomicTimeframeFacet,
    AtomicNumericRange,
    AtomicFacet,
    AtomicColorFacet,
    AtomicRatingFacet,
    AtomicFormatCurrency,
    AtomicNumericFacet
} from "@coveo/atomic-react";

const Coveo: React.FC = () => {
    return <div>
        <AtomicSearchInterface>
            <AtomicLoadMoreResults />
            <AtomicSearchBox />
            <AtomicLayoutSection section="facets">
                <AtomicFacetManager>
                    <AtomicFacet field="source" label="Source" />
                    <AtomicFacet field="objecttype" label="Type" />
                    <AtomicNumericFacet
                        field="cat_review_count"
                        label="Amount of reviews"
                        displayValuesAs="link"
                    >
                        <AtomicNumericRange start={0} end={150} label="Few" />
                        <AtomicNumericRange
                            start={150}
                            end={650}
                            label="A moderate amount"
                        />
                        <AtomicNumericRange start={650} end={9999999999} label="A lot" />
                    </AtomicNumericFacet>
                    <AtomicColorFacet
                        field="cat_color"
                        label="Color"
                        numberOfValues={6}
                        sortCriteria="occurrences"
                    />
                    <AtomicNumericFacet
                        field="ec_price"
                        label="Cost"
                        withInput="integer"
                    >
                        <AtomicFormatCurrency currency="USD" />
                    </AtomicNumericFacet>
                    <AtomicTimeframeFacet withDatePicker label="Listed within">
                        <AtomicTimeframe unit="hour" />
                        <AtomicTimeframe unit="day" />
                        <AtomicTimeframe unit="week" />
                        <AtomicTimeframe unit="month" />
                        <AtomicTimeframe unit="quarter" />
                        <AtomicTimeframe unit="year" />
                        <AtomicTimeframe unit="year" amount={10} period="next" />
                    </AtomicTimeframeFacet>
                    <AtomicRatingFacet
                        field="ec_rating"
                        label="Rating"
                        numberOfIntervals={5}
                    />
                    <AtomicRatingRangeFacet
                        field="ec_rating"
                        label="Rating Range"
                        numberOfIntervals={5}
                        facetId="ec_rating_range"
                    />
                </AtomicFacetManager>
            </AtomicLayoutSection>
        </AtomicSearchInterface>
    </div>
}

export default Coveo;