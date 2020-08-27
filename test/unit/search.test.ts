import { search } from "../../lib";

test("throws a TypeError if the first argument is not specified", async () => {
    // @ts-ignore
    await expect(search()).rejects.toThrow(
        TypeError("expected argument 1 to be a string")
    );
});

test("throws a TypeError if the first argument is not a string", async () => {
    // @ts-ignore
    await expect(search(42)).rejects.toThrow(
        TypeError("expected argument 1 to be a string")
    );
});

test("throws a TypeError if the second argument is not an object", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", 42)).rejects.toThrow(
        TypeError("expected argument 2 to be an Object")
    );
});

test("throws an Error if one of the options are not allowed", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { some: "thing" })).rejects.toThrow(
        Error(
            "unknown option some (allowed: limit, autocomplete, longitude, latitude, type, postcode, citycode)"
        )
    );
});

test("throws a TypeError if the options.type is not a String", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { type: 42 })).rejects.toThrow(
        TypeError("expected key options.type to be a String")
    );
});

test("throws an Error if the options.type is not one of the allowed", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { type: "foo" })).rejects.toThrow(
        Error(
            "unknown value foo for key options.type (allowed: street, house, locality, city, region, country)"
        )
    );
});

test("do not throws an Error if the options.type is one of the allowed", async () => {
    await expect(
        search("8 bd du port", { type: "street" })
    ).resolves.toBeInstanceOf(Object);
});

test("throws a TypeError if the options.autocomplete key is not a Boolean", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { autocomplete: 42 })).rejects.toThrow(
        TypeError("expected key options.autocomplete to be a Boolean")
    );
});

test("does not throws a TypeError if the options.autocomplete key is a Boolean", async () => {
    // @ts-ignore
    await expect(
        search("8 bd du port", { autocomplete: true })
    ).resolves.toBeInstanceOf(Object);
});

test("throws a TypeError if the options.longitude is not a Number", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { longitude: "foo" })).rejects.toThrow(
        TypeError("expected key options.longitude to be a Number")
    );
});

test("throws a RangeError if the options.longitude is below -180", async () => {
    await expect(search("8 bd du port", { longitude: -190 })).rejects.toThrow(
        TypeError("expected key options.longitude to be between -180 and 180")
    );
});

test("do not throws RangeError if the options.longitude is -180", async () => {
    await expect(
        search("8 bd du port", { longitude: 180 })
    ).resolves.toBeInstanceOf(Object);
});

test("throws a RangeError if the options.longitude is above 180", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { longitude: 190 })).rejects.toThrow(
        RangeError("expected key options.longitude to be between -180 and 180")
    );
});

test("do not throw RangeError if the options.longitude is equal to 180", async () => {
    await expect(
        search("8 bd du port", { longitude: 180 })
    ).resolves.toBeInstanceOf(Object);
});

test("throws a TypeError if the options.latitude is not a Number", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { latitude: "foo" })).rejects.toThrow(
        TypeError("expected key options.latitude to be a Number")
    );
});

test("throws a RangeError if the options.latitude is below 0", async () => {
    await expect(search("8 bd du port", { latitude: -10 })).rejects.toThrow(
        TypeError("expected key options.latitude to be between 0 and 90")
    );
});

test("do not throws a RangeError if the options.latitude is 0", async () => {
    await expect(
        search("8 bd du port", { latitude: 0 })
    ).resolves.toBeInstanceOf(Object);
});

test("throws a RangeError if the options.latitude is above 90", async () => {
    await expect(search("8 bd du port", { latitude: 100 })).rejects.toThrow(
        TypeError("expected key options.latitude to be between 0 and 90")
    );
});

test("do not throws RangeError if the options.latitude is 90", async () => {
    await expect(
        search("8 bd du port", { latitude: 90 })
    ).resolves.toBeInstanceOf(Object);
});

test("throws a TypeError if the options.postcode is not a String", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { postcode: 42 })).rejects.toThrow(
        TypeError("expected key options.postcode to be a String")
    );
});

test("do not throws TypeError if the options.citycode is a String", async () => {
    await expect(
        search("8 bd du port", { postcode: "44380" })
    ).resolves.toBeInstanceOf(Object);
});

test("throws a TypeError if the options.citycode is not a String", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { citycode: 42 })).rejects.toThrow(
        TypeError("expected key options.citycode to be a String")
    );
});

test("do not throws a TypeError if the options.citycode is a String", async () => {
    await expect(
        search("8 bd du port", { citycode: "44380" })
    ).resolves.toBeInstanceOf(Object);
});

test("throws a TypeError if the options.limit is not a Number", async () => {
    // @ts-ignore
    await expect(search("8 bd du port", { limit: "1" })).rejects.toThrow(
        TypeError("expected key options.limit to be a Number")
    );
});

test("throws a RangeError if the options.limit is below 1", async () => {
    await expect(search("8 bd du port", { limit: 0 })).rejects.toThrow(
        RangeError("expected key options.limit to be greater or equal to 1")
    );
});

test("do not throws a RangeError if the options.limit is 1", async () => {
    await expect(search("8 bd du port", { limit: 1 })).resolves.toBeInstanceOf(
        Object
    );
});

test("should return only 1 result if the limit is 1", async () => {
    const response = await search("8 bd du", { limit: 1 });

    expect(response.features.length).toBe(1);
});

test("should return 2 results if the limit is 2", async () => {
    const response = await search("8 bd du", { limit: 2 });

    expect(response.features.length).toBe(2);
});
