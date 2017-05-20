FROM golang

# Copy the local package files to the container's workspace.
ADD . /go/src/github.com/Deutsche-Boerse/cloud-dojo/advanced-go-example

# Build the outyet command inside the container.
# (You may fetch or manage dependencies here,
# either manually or with a tool like "godep".)
RUN go install github.com/Deutsche-Boerse/cloud-dojo/advanced-go-example

# Run the outyet command by default when the container starts.
ENTRYPOINT /go/bin/workshop-dbg

EXPOSE 5678