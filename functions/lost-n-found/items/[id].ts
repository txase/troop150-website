interface Env {
  LOST_AND_FOUND_ITEMS: R2Bucket;
}

export const onRequestGet: PagesFunction<Env, 'id'> = async (context) => {
  try {
    if (typeof context.params.id !== 'string') {
      return new Response(`Invalid item ID type ${context.params.id}`, { status: 400 });
    }

    const object = await context.env.LOST_AND_FOUND_ITEMS.get(context.params.id);

    return new Response(object.body);
  } catch (err) {
    console.error(`Error fetching items: ${err}`)
    return new Response("Error fetching items", { status: 500 })
  }
}